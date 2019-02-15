import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'


import { Backdrop, InputText, TextArea, Button, FormCard, CloseButton } from '../../components'
import { showCommentModal } from '../../actions/navbar.actions'
import { addComment } from '../../actions/commet.actions'

class CommentForm extends Component {

    // ***********************************
    // Events
    // ***********************************
    onInputChange = (name, value) => {
        this.setState(state => {
            state.formData[name] = value
            return state
        })
    }
    onBtnAddCommentClicked = (event) => {
        event.preventDefault()
        const { body, author } = this.state.formData
        const comment = {
            id: uuidv1(),
            timestamp: Date.now(),
            body,
            author,
            parentId: this.props.selectedPost.id
        }
        this.props.dispatch(addComment(comment))
    }
    onBtnSaveCommentClicked = () => {

    }
    onDismiss = () => {
        this.props.dispatch(showCommentModal(false))
    }
    // ***********************************
    // Hooks
    // ***********************************
    constructor(props) {
        super(props)
        const { selectedComment } = props
        if (!selectedComment) {
            this.state = {
                formData: {
                    body: '',
                    author: ''
                }
            }
        } else {
            const { body, author } = selectedComment
            this.state = { formData: { body, author } }
        }

    }
    render() {
        const { body, author } = this.state.formData
        const { selectedComment } = this.props
        return (
            <Backdrop>
                <FormCard minWidth="500px">
                    <form>
                        <div className="text-right"><CloseButton onClick={this.onDismiss} /></div>
                        <TextArea
                            label="Body"
                            value={body}
                            onChange={value => this.onInputChange('body', value)} />
                        <div className="m-t-1">
                            <InputText
                                label="Author"
                                value={author}
                                onChange={value => this.onInputChange('author', value)} />
                        </div>
                        <div className="m-t-1 text-center">
                            <Button
                                color="#F1A31D"
                                onClick={
                                    selectedComment
                                        ? this.onBtnSaveCommentClicked
                                        : event => this.onBtnAddCommentClicked(event)
                                }>
                                {
                                    selectedComment
                                        ? 'Save Comment'
                                        : 'Add Comment'
                                }
                            </Button>
                        </div>
                    </form>
                </FormCard>
            </Backdrop>
        )
    }
}

const mapToProps = ({
    comment: { selectedComment },
    post: { selectedPost }
}) => ({ selectedComment, selectedPost })

export default connect(mapToProps)(CommentForm)

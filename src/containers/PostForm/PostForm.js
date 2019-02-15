import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import uuidv1 from 'uuid/v1'

import './PostForm.css'
import { FormCard, InputText, TextArea, Select, Button } from '../../components'
import { navItemChange } from '../../actions/navbar.actions'
import { addNewPost, editPost } from '../../actions/post.actions'

class PostForm extends Component {

    // ***********************************
    // Events
    // ***********************************
    onInputChange = (name, value) => {
        this.setState(state => {
            state.formData[name] = value
            return state
        })
    }
    onBtnPostClicked = (event, type) => {
        event.preventDefault()
        if (type === 'editing') {
            const { id, title, body } = this.state.formData
            this.props.dispatch(editPost({ id, title, body }))
        } else if (type === 'add') {
            const id = uuidv1()
            const timestamp = Date.now()
            const { title, body, author, category } = this.state.formData
            this.props.dispatch(addNewPost({ id, title, body, author, category, timestamp }))
        }
        this.props.history.push('/')
    }
    // ***********************************
    // Hooks
    // ***********************************
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                id: '',
                title: '',
                body: '',
                author: '',
                category: 'react',
            }
        }
    }
    componentDidMount() {
        const { selectedPost } = this.props
        if (selectedPost) {
            this.props.dispatch(navItemChange('Editing Post'))
            this.setState(state => {
                const { id, title, body, author, category } = selectedPost
                state.formData = { id, title, body, author, category }
                return state
            })
        } else {
            this.props.dispatch(navItemChange('New Post'))
        }
    }
    render() {
        const { title, body, author, category } = this.state.formData
        const { categories, selectedPost } = this.props
        return (
            <div className="PostForm">
                <FormCard>
                    <form>
                        <InputText
                            label="Title"
                            value={title}
                            onChange={value => this.onInputChange('title', value)} />
                        <div className="m-t-1">
                            <TextArea
                                label="Body"
                                value={body}
                                onChange={value => this.onInputChange('body', value)} />
                        </div>
                        <div className="m-t-1">
                            <InputText
                                disabled={selectedPost}
                                label="Author"
                                value={author}
                                onChange={value => this.onInputChange('author', value)} />
                        </div>
                        <div className="m-t-1">
                            <Select
                                disabled={selectedPost}
                                label="Category"
                                value={category}
                                items={categories}
                                onChange={value => this.onInputChange('category', value)} />
                        </div>
                        <div className="m-t-1 text-center">
                            <Button
                                color="#1DA1F2"
                                onClick={selectedPost
                                    ? (e) => this.onBtnPostClicked(e, 'editing')
                                    : (e) => this.onBtnPostClicked(e, 'add')
                                }>
                                {selectedPost ? 'Save Post' : 'Add Post'}
                            </Button>
                        </div>
                    </form>
                </FormCard>
            </div>
        )
    }
}

const mapToProps = ({ category: { categories }, post: { selectedPost } }) => ({ categories, selectedPost })
export default connect(mapToProps)(withRouter(PostForm))
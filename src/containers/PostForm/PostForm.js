import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'

import './PostForm.css'
import { FormCard, InputText, TextArea, Select, Button } from '../../components'
import { navItemChange } from '../../actions/navbar.actions'
import { addNewPost } from '../../actions/post.actions'

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

        } else if (type === 'add') {
            const id = uuidv1()
            const timestamp = Date.now()
            const { title, body, author, category } = this.state.formData
            this.props.dispatch(addNewPost({ id, title, body, author, category, timestamp }))
        }
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
                category: props.categories && props.categories.lenght > 0 ? props.categories[0].path : '',
            }
        }
    }
    componentDidMount() {
        const { postId, posts } = this.props
        if (postId) {
            this.props.dispatch(navItemChange('Editing Post'))
            const post = posts.find(p => p.id === postId)
            post && this.setState(state => {
                const { id, title, body, author, category } = post
                state.formData = { id, title, body, author, category }
                return state
            })
        } else {
            this.props.dispatch(navItemChange('New Post'))
        }
    }
    render() {
        const { title, body, author, category } = this.state.formData
        const { categories, postId } = this.props

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
                                label="Author"
                                value={author}
                                onChange={value => this.onInputChange('author', value)} />
                        </div>
                        <div className="m-t-1">
                            <Select
                                label="Category"
                                value={category}
                                items={categories}
                                onChange={value => this.onInputChange('category', value)} />
                        </div>
                        <div className="m-t-1 text-center">
                            <Button
                                color="#1DA1F2"
                                onClick={postId
                                    ? (e) => this.onBtnPostClicked(e, 'editing')
                                    : (e) => this.onBtnPostClicked(e, 'add')
                                }>
                                {postId ? 'Save Post' : 'Add Post'}
                            </Button>
                        </div>
                    </form>
                </FormCard>
            </div>
        )
    }
}

const mapToProps = ({ category: { categories }, post: { posts } }) => ({ categories, posts })
export default connect(mapToProps)(PostForm)
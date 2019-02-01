import React, { Component } from 'react'

import './PostForm.css'
import { FormCard, InputText, TextArea, Select, Button } from '../../components'

export default class PostForm extends Component {
    state = {
        formData: {
            title: '',
            body: '',
            author: '',
            category: ''
        }
    }
    // ***********************************
    // Events
    // ***********************************
    onInputChange = (name, value) => {

    }
    onBtnAddPostClicked = () => {

    }
    // ***********************************
    // Hooks
    // ***********************************
    render() {
        const { title, body, author, category } = this.state.formData
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
                                items={[
                                    { label: 'RESTO', name: 'RESTO' },
                                    { label: 'react', name: 'React' },
                                    { label: 'redux', name: 'Redux' },
                                ]}
                                onChange={value => this.onInputChange('category', value)} />
                        </div>
                        <div className="m-t-1 text-center">
                            <Button
                                color="#1DA1F2"
                                onClick={this.onBtnAddPostClicked}>Add Post</Button>
                        </div>
                    </form>
                </FormCard>
            </div>
        )
    }
}

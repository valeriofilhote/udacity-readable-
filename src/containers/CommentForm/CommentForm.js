import React, { Component } from 'react'

import { Backdrop, InputText, TextArea, Button, FormCard } from '../../components'

export default class CommentForm extends Component {
    state = {
        formData: {
            body: '',
            author: ''
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
        const { body, author } = this.state.formData
        return (
            <Backdrop>
                <FormCard minWidth="500px">
                    <form>
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
                                onClick={this.onBtnAddPostClicked}>Add Comment</Button>
                        </div>
                    </form>
                </FormCard>
            </Backdrop>
        )
    }
}

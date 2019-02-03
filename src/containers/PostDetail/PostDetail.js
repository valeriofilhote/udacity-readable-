import React, { Component } from 'react'
import { connect } from 'react-redux'

import './PostDetail.css'
import { Post, Comment, Spinner } from '../../components'
import CommentForm from '../CommentForm/CommentForm'
import { navItemChange } from '../../actions/navbar.actions'

class PostDetail extends Component {

    componentDidMount() {
        this.props.dispatch(navItemChange('Post Detail'))
    }
    render() {
        const { selectedPost, selectedComment, comments } = this.props
        const detailElement = (
            <React.Fragment>
                <div className="PostDetail">
                    <Post post={selectedPost} bodyVisible />
                    {comments.map(c => (
                        <div key={c.id} className="m-t-1 comment__container">
                            <Comment comment={c} />
                        </div>
                    ))}

                </div>
                {selectedComment ? <CommentForm /> : null}
            </React.Fragment>
        )
        const spinnerElement = <div className="text-center"><Spinner /></div>

        return selectedPost ? detailElement : spinnerElement
    }
}
const mapToProp = ({ post: { selectedPost }, comment: { selectedComment, comments } }) => (
    { selectedPost, selectedComment, comments }
)

export default connect(mapToProp)(PostDetail)
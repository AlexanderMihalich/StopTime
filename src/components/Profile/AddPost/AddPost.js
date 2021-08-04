import React, { PureComponent } from 'react'
import style from './AddPost.module.scss'
import MyPosts from './MyPosts/MyPosts';
import AddNewPostForm from './AddNewPostForm/AddNewPostForm'

class AddPost extends PureComponent {

	addNewPost = (values) => {
		this.props.addPost(values.newPostText)
	}

	render() {
		let postsElement = this.props.posts.map(p => <MyPosts img={p.img} key={p.id} message={p.message} />)
		return (
			<div className={style.content__addpost}>
				<h2 className='title'>My posts</h2>
				<AddNewPostForm onSubmit={this.addNewPost} />
				<div className={style.posts}>
					{postsElement}
				</div>
			</div>

		)
	}
}
export default AddPost
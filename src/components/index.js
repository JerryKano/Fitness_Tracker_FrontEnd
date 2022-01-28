const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api"

export default BASE_URL;

export function makeHeaders() {
    if (getToken()) {
        const token = localStorage.getItem("token");
        return {'Content-Type': 'Application/JSON',
        'Authorization': `Bearer ${token}`}
    } else {
        return {'Content-Type': 'Application/JSON'}
    }
}

export { default as NavBar } from './Navbar';
// export { default as AllPosts } from './AllPosts';
export { default as Login} from './Login';
export { default as LoginForm} from './Register';
// export { default as SinglePostElement } from './SinglePostElement'
// export { default as PostForm } from './PostForm'
export { default as App} from '../App'
// export { default as TodoList} from './todoList'
export { default as HomeRoutine } from './HomeRoutine'
export { default as DeleteRoutine} from './DeleteRoutine'
export { default as UpdateRoutine} from './UpdateRoutine'


import style from './Sidebar.module.css'
export function Sidebar() {
    return (
    <aside className={style.container}>
        <img className={style.sidebarCover} src="https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background image" />
        <img  className={style.profileImage} src="https://avatars.githubusercontent.com/u/25959443?v=4" alt="User Profile Image" />
        <strong>Lucas Maniero</strong>
        <caption>Software Developer</caption>
        <button>Edite seu perfil</button>
    </aside>
    )
}
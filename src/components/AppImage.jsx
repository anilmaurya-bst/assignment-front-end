

const AppImage = ({app_image_src,app_name}) => {
    return (
        <div>
            <img src={app_image_src} alt="" />
            <p>{app_name}</p>
        </div>
    )
}
export  default AppImage
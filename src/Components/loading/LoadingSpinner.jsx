import './styles.css'

export default function LoadingSpinner({width, height}) {
  return (
    <div id="loading" style={{width: width, height: height, borderRadius: "50%"}}></div>
  )
}


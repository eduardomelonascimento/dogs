import './styles.css'

export default function LoadingSpinner({width, height}) {
  return (
    <div id="loading" className={`w-[${width}] h-[${height}]`} ></div>
  )
}


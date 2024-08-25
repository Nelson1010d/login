import './styles/input.css'
import classNames from 'classnames';

export default function Input({text, type = 'text'}) {
  return (
  <div className="relative">
    <input className="input-cal input-base" id="input" placeholder="" type={type} />
    <label id="label-input">{text}</label>
  </div>
  )
}

import PropTypes from 'prop-types'
import {getGfFieldId, getGfHiddenClassName} from '@/functions/gravityForms'
import cn from 'classnames'

/**
 * Render GravityForms Checkbox field component.
 *
 * @param {object}        props             GravityForm Checkbox field props.
 * @param {string}        props.className   GravityForm field wrapper class.
 * @param {string}        props.description GravityForm field description.
 * @param {string|number} props.id          GravityForm field id.
 * @param {string}        props.label       GravityForm field label.
 * @param {string}        props.size        GravityForm field size.
 * @param {boolean}       props.visibility  GravityForm field visibility.
 * @return {Element}                        The Checkbox component.
 */
export default function Select({
  className,
  description,
  id,
  label,
  size,
  visibility
}) {
  const fieldId = getGfFieldId(id)
  const isHiddenClass = getGfHiddenClassName(visibility)

  return (
    <div
      id={fieldId}
      className={cn(className, isHiddenClass) || null}
      field-size={size && `size-${size}`}
    >
      {description}
      {label}
    </div>
  )
}

Select.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  label: PropTypes.string,
  size: PropTypes.string,
  visibility: PropTypes.string
}

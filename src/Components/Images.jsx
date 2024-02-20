
function Images({className,src,alt}) {
  return (
   <img src={src} alt={alt} className={`${className}`} />
  )
}

export default Images

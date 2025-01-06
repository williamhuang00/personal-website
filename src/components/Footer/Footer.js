import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
            <p>&copy; {new Date().getFullYear()} My Personal Website. All rights reserved.</p>
    </footer>
  )
}

export default Footer
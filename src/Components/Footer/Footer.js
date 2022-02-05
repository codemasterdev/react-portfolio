import React from 'react';
import ReactDOM from 'react-dom'
import "../Footer/footer.css"


function Footer() {
    return (

        <footer id="footer">
            <p>&copy; Devon Webster developement. All rights reserved.</p>
            <p>
                <a href="#top">Go To Top</a>
            </p>
        </footer>

    )
}

ReactDOM.render(<Footer />, document.getElementById("root"));

export default Footer
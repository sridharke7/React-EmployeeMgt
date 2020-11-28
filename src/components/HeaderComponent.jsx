import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="https://sridharkesavan.net" className="navbar-brand">Employee Management</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
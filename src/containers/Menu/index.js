import React, { Component } from 'react';

import Button from '../../components/Button';
import Data from '../../Data';

import './Menu.scss';

export default class Menu extends Component {
    redirectToForm = (airlineName) => {
        const { history } = this.props;
        history.push({
            pathname: airlineName.replace(/ /g, '-').toLowerCase(),
            state: {
                airlineName,
            }
        });
    }

    renderList = () => {
        return Data.listado.map(item => {
            return (
                <li key={item.id}>
                    <Button
                        text={item.name}
                        action={() => this.redirectToForm(item.name)}
                        />
                </li>
            )
        })
    }

    render() {
        return (
            <section className="menu">
                <ul>
                    {this.renderList()}
                </ul>
            </section>
        )
    }
}

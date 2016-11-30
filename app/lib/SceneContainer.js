import React, { Component, PropTypes } from 'react'
import First from '../store/First'
import Second from '../store/Second'
import Third from '../store/Third'
import Modal from '../store/Modal'

export class SceneContainer extends Component {
    static renderScene(scene) {
        const { route } = scene;

        switch (route.key) {
            case 'First':
                return <First />
            case 'Second':
                return <Second />
            case 'Third':
                return <Third />
            case 'Modal':
                return <Modal />
        }
    }
}
import React from 'react';
import styles from './SideMenu.module.sass';
import classNames from 'classnames';

class SideMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,

    };
    this.menuContainerRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.dir(this.menuContainerRef);
  }

  setIsOpened = value => {
    this.setState({
      isOpened: value,
    });
  };

  componentDidMount() {
    window.addEventListener('click', this.onOutsideClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onOutsideClick);
  }

  onOutsideClick = (e) => {

    if (this.state.isOpened &&
        !this.menuContainerRef.current.contains(e.target)) {
      this.setIsOpened(false);
    }
  };

  render() {
    const {isOpened} = this.state;
    return (
        <div ref={this.menuContainerRef} className={classNames(styles.container,
            {[styles.menuOpened]: isOpened})}>
          <button onClick={() => this.setIsOpened(!isOpened)}>{isOpened
              ? 'Close'
              : 'Open'} Menu
          </button>
          {
            isOpened && (
                <nav>
                  <ul>
                    <li>NavItem1</li>
                    <li>NavItem2</li>
                    <li>NavItem3</li>
                    <li>NavItem4</li>
                    <li>NavItem5</li>
                    <li>NavItem6</li>
                  </ul>
                </nav>
            )
          }
        </div>
    );
  }

}

export default SideMenu;
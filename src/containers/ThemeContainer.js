import { Container } from 'unstated';
import dark from '../utils/theme.dark';
import defaultTheme from '../utils/theme.default';
import sunset from '../utils/theme.sunset';

export default class ThemeContainer extends Container {
    state = {
        selectedTheme: JSON.parse(window.localStorage.getItem("theme")) || defaultTheme,
        themes: [defaultTheme, sunset, dark]
    }

    changeTheme = theme => {
        this.setState({
            selectedTheme: theme
        });
        if (typeof localStorage === 'object') {
            try {
                 window.localStorage.setItem("theme", JSON.stringify(theme));
            } catch (e) {
                alert('Wops! Could not store the theme in your local storage - Are you running Safari in "Private Mode"? 😏');
            }
        }
    }

}
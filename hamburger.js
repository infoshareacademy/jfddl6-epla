window.addEventListener(
    'load',
    () => {
        const mainNavToggle = document.querySelector('.main-nav__toggle');
        const navigation = document.querySelector('.main-nav__navigation');

        navigationHeight = navigation.clientHeight;
        navigation.classList.add('main-nav__navigation--collapsed')

        mainNavToggle.addEventListener(
            'click',
            (event) => {
                event.preventDefault();
                if (navigation.classList.contains('main-nav__navigation--collapsed')) {
                    navigation.classList.remove('main-nav__navigation--collapsed');
                    navigation.style.maxHeight = navigationHeight + "px";
                } else {
                    navigation.classList.add('main-nav__navigation--collapsed');
                }
            }
        )
    }
)

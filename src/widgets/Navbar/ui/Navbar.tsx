import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavBarProps{
    className?: string;
}

export const Navbar = ({ className }:NavBarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={classNames(cls.links)}>
            <AppLink
                theme={AppLinksTheme.SECONDARY}
                className={cls.mainLink}
                to="/"
            >
                Главная
            </AppLink>
            <AppLink
                theme={AppLinksTheme.SECONDARY}
                to="/about"
            >
                О сайте
            </AppLink>
        </div>
    </div>
);

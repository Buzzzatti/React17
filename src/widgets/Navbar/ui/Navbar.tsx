import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';

interface NavBarProps{
    className?: string;
}

export const Navbar = ({className}:NavBarProps) => {

    return (
        <div className={classNames(cls.Navbar,{},[className])}>
            <div className={classNames(cls.links)}>
                <AppLink
                    theme={AppLinksTheme.SECONDARY}
                    className={cls.mainLink} to={'/'}>
                    Главная
                </AppLink>
                <AppLink
                    theme={AppLinksTheme.SECONDARY}
                    to={'/about'}>
                    Главная
                </AppLink>
            </div>

        </div>
    )
}

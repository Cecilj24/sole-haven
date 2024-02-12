'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { inclusions, noHeaderFooterUrls, } from '../../../constants'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import classes from './index.module.scss'
import Link from 'next/link'
import { Footer, Media } from '../../../../payload/payload-types'
import { Button } from '../../Button'

// Come back to this page and investigate the hook problems
const FooterComponent = ({ footer }: { footer: Footer }) => {
    const pathname = usePathname()
    const navItems = footer?.navItems || [];

    return (
        <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
            <Gutter>
                <ul className={classes.inclusions}>
                    {inclusions.map((inclusion, index) => (
                        <li key={inclusion.title}>
                            <Image
                                src={inclusion.icon}
                                alt={inclusion.title}
                                width={36}
                                height={36}
                                className={classes.icon}
                            />

                            <h5>{inclusion.title}</h5>
                            <p>{inclusion.description}</p>
                        </li>
                    ))}
                </ul>
            </Gutter>
            <div className={classes.footer}>
                <Gutter>
                    <div className={classes.wrap}>
                        <Link href="/">
                            <Image src="/Logo-white.png" alt="logo" width={170} height={30} priority={true} />
                        </Link>

                        <p>{footer.copywright}</p>
                        <div className={classes.socialLinks}>
                            {navItems.map((item) => {
                                const icon = item?.link?.icon as Media;

                                return (
                                    <Button
                                        key={item.link.label}
                                        el="link"
                                        href={item.link.url}
                                        newTab={true}
                                        className={classes.socialLinkItem}
                                    >
                                        {/* // icon is there but not showing, fix later */}
                                        <Image
                                            fill
                                            src={icon?.url}
                                            alt={item.link.label}
                                            className={classes.socialIcon}


                                        />

                                    </Button>
                                )
                            })}
                        </div>
                    </div>
                </Gutter>

            </div>
        </footer>
    )
}

export default FooterComponent

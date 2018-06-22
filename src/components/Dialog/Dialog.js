/* @flow */
/* @jsx h */
import {h} from 'hyperapp'
import cn from 'classnames'
import styles from './Dialog.css'

import {translate} from '../../helpers'

import {Button} from '../Button/Button'
import {PoweredBy} from '../PoweredBy/PoweredBy'

import type {Props} from './flow-typed'

export const Dialog = ({className}: Props, children: Children) => (
  <div class={cn(styles.dialog, className)}>
    <div class={styles.dialog__container}>
      <Button
        withIcon='close'
        isMuted
        className={styles.dialog__close}
        title={translate('dialog.close')} />
      <div class={styles.dialog__placeholder}>{children}</div>
    </div>
    <PoweredBy
      className={styles['dialog__powered-by']}
      version='4.0.0'/>
  </div>
)

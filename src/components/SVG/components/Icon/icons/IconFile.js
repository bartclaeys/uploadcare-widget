/* @flow */
/* @jsx h */
import {h} from 'hyperapp'
import {SVG} from '../../../SVG'

import type {Props} from './flow-typed'

/* eslint-disable max-len */
export const IconFile = ({className}: Props) => (
  <SVG
    width={32}
    height={32}
    className={className}>
    <path d='M19,6 L24,11 L19.9998075,11 C19.4437166,11 19,10.5523709 19,10.0001925 L19,6 Z M24,13 L24,24.1924057 C24,25.1867918 23.1921867,26 22.1956985,26 L9.8043015,26 C8.81543922,26 8,25.1937105 8,24.1991019 L8,7.73913043 C8,6.60314448 8.62661207,6 9.77777778,6 L17,6 L17,10.9940809 C17,12.1134452 17.8980806,13 19.0059191,13 L24,13 Z'/>
  </SVG>
)

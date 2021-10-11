import React, { PropsWithChildren } from 'react';

import styles from './notification.module.css';

const Notification = (props: PropsWithChildren<unknown>) => (
	<section className={styles.notification}>{props.children}</section>
);

export default Notification;

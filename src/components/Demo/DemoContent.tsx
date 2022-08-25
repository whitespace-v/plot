import React, { useState} from 'react';
import DemoPlates from "./DemoPlates";
import classes from '../../styles/Demo/DemoContent.module.scss'
import Layout from "../../hoc/Layout/Layout";

import DemoNotification from "./DemoNotification";

const DemoContent = () => {

    const [notification, setNotification] = useState<boolean>(true)

    return (
        <>
            <div className={classes['DemoContent']}>
                <Layout>
                    <p className={classes['DemoContent__title']}>
                        Демо модуль
                    </p>
                    <p className={classes['DemoContent__subtitle']}>
                        Выберите уровень для прохождения
                    </p>
                </Layout>
                <DemoPlates/>
                <Layout>
                    <p className={classes['DemoContent__paragraph']}>
                        Для прохождения всего модуля Вам необходимо
                        пройти первые четыре уровня в любом порядке,
                        в конце Вам откроется последний уровень.
                    </p>
                </Layout>
            </div>
            {
                notification && <DemoNotification setNotification={setNotification}/>
            }
        </>

    );
};

export default DemoContent;
import { Suspense } from 'react';

// project imports
import Loader from '../Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component:any) => (props:any) =>
    (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    );

export default Loadable;

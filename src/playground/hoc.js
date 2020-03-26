import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please Don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const withAthenWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth? (
                <WrappedComponent {...props} />
            ) : (
                <p>Nieko nesigavo</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AutheInfo = withAthenWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AutheInfo isAuth={false} info="Kuku" />, document.getElementById('app'));
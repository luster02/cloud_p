import React from 'react';

export const LoaderSpinner = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-light" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export const SpinnerPage = () => {
    return (
        <div className="text-center">
            <>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </>
        </div>
    );
}
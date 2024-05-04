const Loading = (props: any) => {
    const isLoading = props.loading;

    if(isLoading) {
        return (
            <div className="loading-container" data-testid='divLoading'>
                <div className="loading">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

export default Loading
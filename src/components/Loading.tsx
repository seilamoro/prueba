interface PropsLoading {
    loading: boolean;
}  

const Loading = (props: PropsLoading) => {
    const isLoading: boolean = props.loading;

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
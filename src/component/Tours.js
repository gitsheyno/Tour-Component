import Tour from "./Tour"

const Tours = ({ data ,handleDelete}) => {
    return (
        <>
            {data &&
                <main>
                    {data.map(item => (
                        <Tour
                            key={item.id}
                            item={item}
                            handleDelete={handleDelete}
                        />
                    ))}
                </main>
            }
        </>
    )
}

export default Tours

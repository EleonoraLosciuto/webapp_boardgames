export const notFound = (req, res, next) => {
    res.status(404).json(
        {
            status: "not found",
            message: "page or endpoint not found"
        }
    )
};
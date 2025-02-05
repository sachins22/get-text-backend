const AsyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise
        .resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }
}


export  default AsyncHandler ;


// const asyncHandler = () => {() => {}}

// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         fn (req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false
//             message: err.message
//         })
//     }
// }
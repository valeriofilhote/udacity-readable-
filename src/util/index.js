export function sortedBy(type, posts) {
    // type: 'byDate' or 'byVoteScore'
    if (type === 'byDate') {
        return posts.sort((a, b) => {
            return b.timestamp - a.timestamp
        })
    } else if (type === 'byVoteScore') {
        return posts.sort((a, b) => {
            return b.voteScore - a.voteScore
        })
    } else {
        console.error(`Sort By Error. Undefined Type: ${type}`)
    }
}
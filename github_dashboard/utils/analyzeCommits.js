require('dotenv').config();

const analyzeCommits = async (owner, repo) => {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`, {
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
    });
    const data = await response.json();
    
    if (!Array.isArray(data)) {
        throw new Error(data.message || "Failed to fetch commits");
    }

    const counts= {};
    for (const commit of data){
        const name = commit.author.login;
        counts[name] = (counts[name] || 0) + 1;
    }
    return counts;
    
}
module.exports= analyzeCommits;
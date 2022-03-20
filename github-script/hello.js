module.exports = async ({ context, github }) => {
  console.log(JSON.stringify({ contextValue: context.repo.owner }));

  console.log(
    JSON.stringify({
      githubValue: await github.rest.actions.listRepoWorkflows({
        owner: context.repo.owner,
        repo: context.repo.repo,
      }),
    })
  );

  console.log(JSON.stringify({ environmentVariable: process.env.REF }));

  console.log(
    JSON.stringify({
      httpValue: await github.request("https://holidays-jp.github.io/api/v1/date.json"),
    })
  );

  return "my-result";
};

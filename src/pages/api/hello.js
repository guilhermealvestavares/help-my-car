// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    parts: [
      {
        name: "Biela",
        category: "motor",
        description: "lorem ipsum dolor sit amet",
      },
      {
        name: "Homocinética",
        category: "rodas",
        description: "lorem ipsum dolor sit amet",
      },
      {
        name: "Cárter",
        category: "motor",
        description: "lorem ipsum dolor sit amet",
      },
    ],
  });
};

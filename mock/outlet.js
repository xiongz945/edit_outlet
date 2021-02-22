const waitTime = (time = 100) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });

export default {
    'GET /api/connectedPlatforms': {
      data: [
        "Grab",
        "Foodpanda",
        "Deliveroo",
        "Google",
        "Facebook",
        "Yelp",
        "UberEat"
    ]},

    'POST /api/saveOutlet': async (req, res) => {
        const { outlet } = req.body;
        await waitTime(2000);
        if (typeof outlet !== 'undefined') {
            res.send({
                status: 'ok'
            });
        };
        return;
    },

    'GET /api/getOutlet': {
        "brand-name": "Test",
        "outlet-name": "Test",
        "address": "test street",
        "phone-number": "123456789",
        "service-options": {
          all: false,
          options: ["Dine-in"]
        }
    }
};
import Client from '../models/client';

class clientController {
  async index(req, res) {
    const { page = 1 } = req.query;

    console.log(page[0]);
    const count = await Client.countDocuments();

    const clients = await Client.find(null, null, {
      skip: 5 * (page[0] - 1),
      limit: 5,
    });

    res.header('X-Total-Count', count);

    return res.json(clients);
  }

  async store(req, res) {
    const {
      budget,
      pictures,
      age,
      name,
      company,
      email,
      phone,
      address,
      about,
      registered,
      latitude,
      longitude,
      contactTimeline,
      channel,
    } = req.body;

    const names = {
      first: name.first,
      last: name.last,
    };

    const client = await Client.create({
      budget,
      pictures,
      age,
      name: names,
      company,
      email,
      phone,
      address,
      about,
      registered,
      latitude,
      longitude,
      contactTimeline,
      channel,
    });

    return res.json(client);
  }
  async destroy(req, res) {
    await Client.remove({});

    return res.json(200);
  }
}

export default new clientController();

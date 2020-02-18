import mongoose from "mongoose";
import Job from "../models/Job";

const _repository = mongoose.model("Job", Job);
class JobsService {
  async getAll() {
    return await _repository.find({})
  }

  async findById(id) {
    return await _repository.findById(id)
  }

  async create(rawData) {
    return await _repository.create(rawData)
  }

  async update(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }

  async delete(id) {
    await _repository.findByIdAndDelete(id);
  }
}

const jobsService = new JobsService();
export default jobsService;
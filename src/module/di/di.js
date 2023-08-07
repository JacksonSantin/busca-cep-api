import { axiosInstance } from "@/core/axios";
import { buscaCepController } from "../controller/buscaCepController"

import { buscaInfoCepRepository } from "../data/repository/buscaInfoCepRepository";
import { buscaInfoCepUseCase } from "../domain/usecase/buscaInfoCepUseCase";

const buscaInfoCepRepositoryImpl = buscaInfoCepRepository(axiosInstance)
const buscaInfoCepUseCaseImpl = buscaInfoCepUseCase(buscaInfoCepRepositoryImpl)

const buscaCepControllerImpl = buscaCepController(buscaInfoCepUseCaseImpl)

export { buscaCepControllerImpl }
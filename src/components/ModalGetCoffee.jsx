import * as Dialog from '@radix-ui/react-dialog'


export function ModalGetCoffee(){
    return(
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/40 inset-0 fixed"/>

            <Dialog.Content className=" md:w-[600px] w-[400px] h-[250px] fixed bg-black border border-green-400 py-8 px-10  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -translate- rounded-lg">
                <form>
                    <div className="flex flex-col gap-6">
                      <label htmlFor="coffee" className="font-semibold md:text-3xl text-xl text-white flex justify-center">Pegue um café:</label>
                      <div className='flex justify-center'>
                        <select defaultValue="" name="" id="coffee" className="text-black md:text-lg font-black rounded py-2 w-3/4 text-center ">
                          <option value="" disabled>
                            Selecione seu café favorito
                          </option>
                          <option value="cafe expresso">
                            Café Expresso
                          </option>
                          <option value="cafe com leite">
                            Café com leite
                          </option>
                          <option value="cappuccino">
                            Cappuccino
                          </option>
                          <option value="macchiato">
                            Macchiato
                          </option>
                          <option value="cafe late">
                            Café late
                          </option>
                          <option value="mocha">
                            Mocha
                          </option>
                          <option value="cafe com chantilly">
                            Café com Chantilly
                          </option>
                        </select>
                      </div>
                    </div>
          
                    <footer className="mt-10 flex justify-center gap-4 text-white">
                        <Dialog.Close className="bg-slate-500 rounded-md px-5 h-8 font-medium hover:bg-slate-700">Fechar</Dialog.Close>
                        <button type="submit" className="bg-purple-500 rounded-md px-5 h-8 font-medium flex items-center gap-3 hover:bg-purple-700">Pegar Café</button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}
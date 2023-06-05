import { z } from "zod"

export const registerFormSchema = z.object({
    name: z.string().min(5, "O nome é obrigatório e precisa de pelo menos 5 caracteres."),
    email: z.string().min(1, "O e-mail é obrigatório").email("Forneça um e-mail válido."),
    password: z.string().min(7, "A senha precisa conter pelo menos 7 caracteres.")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .regex(/(?=.*?[!,@,#,$,%,¨,&,*,_,?])/, "É necessário ter um símbolo."),
    confirmPassword: z.string().min(1, "É obrigatório confirmar a senha.")
}).refine(({password, confirmPassword}) => confirmPassword === password, {
    message: "As duas senhas devem corresponder",
    path: ["confirmPassword"],
})

export type TRegisterFormValues = z.infer<typeof registerFormSchema>
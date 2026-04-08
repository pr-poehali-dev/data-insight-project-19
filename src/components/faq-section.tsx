import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как начать покупать на AE Platform?",
      answer:
        "Зарегистрируйтесь, найдите нужный товар через поиск или каталог, добавьте в корзину и оформите заказ. Процесс занимает несколько минут.",
    },
    {
      question: "Какие способы оплаты доступны?",
      answer:
        "Принимаем банковские карты (Visa, Mastercard, МИР), электронные кошельки и оплату при получении. Все транзакции защищены.",
    },
    {
      question: "Сколько идёт доставка?",
      answer:
        "Зависит от региона и способа доставки. Стандартная — 5–14 дней, экспресс — 1–3 дня. Отслеживание заказа доступно сразу после отправки.",
    },
    {
      question: "Что делать, если товар не соответствует описанию?",
      answer:
        "Откройте спор в течение 15 дней с момента получения. Мы разберём ситуацию и вернём деньги, если товар не соответствует заявленным характеристикам.",
    },
    {
      question: "Можно ли вернуть товар?",
      answer:
        "Да, возврат возможен в течение 30 дней при сохранении товарного вида и упаковки. Процедура возврата простая и полностью онлайн.",
    },
    {
      question: "Как стать продавцом на платформе?",
      answer:
        "Заполните заявку в разделе «Для продавцов», пройдите проверку и начните размещать товары. Комиссия — одна из самых низких на рынке.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о покупках, доставке и безопасности на AE Platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

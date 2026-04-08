import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Миллионы товаров",
    description: "Доступ к огромному каталогу товаров со всего мира — электроника, одежда, дом, спорт и многое другое.",
    icon: "globe",
    badge: "Каталог",
  },
  {
    title: "Безопасная оплата",
    description: "Надёжная защита платежей, возврат средств при любых спорных ситуациях — покупайте без риска.",
    icon: "lock",
    badge: "Защита",
  },
  {
    title: "Быстрая доставка",
    description: "Отслеживание заказа в реальном времени и доставка в любую точку страны в кратчайшие сроки.",
    icon: "zap",
    badge: "Скорость",
  },
  {
    title: "Умный поиск",
    description: "ИИ-алгоритмы подбирают лучшие предложения, сравнивают цены и находят именно то, что вам нужно.",
    icon: "brain",
    badge: "ИИ",
  },
  {
    title: "Выгодные цены",
    description: "Прямые поставки от производителей и поставщиков — без посредников, с максимальной скидкой.",
    icon: "target",
    badge: "Скидки",
  },
  {
    title: "Личный кабинет",
    description: "Все ваши заказы, избранное и история покупок в одном месте. Удобный интерфейс на любом устройстве.",
    icon: "link",
    badge: "Удобно",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Возможности платформы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AE Platform — это всё, что нужно для выгодных покупок в одном окне
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

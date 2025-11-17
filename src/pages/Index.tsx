import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const classes = [
  {
    name: 'Штурмовик',
    image: 'https://cdn.poehali.dev/projects/24141875-55cd-4df0-861b-dd6c6c0be2fc/files/5709d585-22b0-4ceb-810b-cec23a8324aa.jpg',
    description: 'Основная боевая единица',
    icon: 'Crosshair'
  },
  {
    name: 'Додепер',
    image: 'https://cdn.poehali.dev/projects/24141875-55cd-4df0-861b-dd6c6c0be2fc/files/c025db8b-28f5-4d87-bd73-c2782b7893a2.jpg',
    description: 'Специалист по увороту',
    icon: 'Zap'
  },
  {
    name: 'Оператор доставки БПЛА ДОДО',
    image: 'https://cdn.poehali.dev/projects/24141875-55cd-4df0-861b-dd6c6c0be2fc/files/d20f3c67-23d7-46a1-b00f-d17610f29bf1.jpg',
    description: 'Пилот дронов с пиццей',
    icon: 'Plane'
  },
  {
    name: 'Водитель',
    image: 'https://cdn.poehali.dev/projects/24141875-55cd-4df0-861b-dd6c6c0be2fc/files/f5569d3c-cc6c-439d-adc8-cb1a4e90fc6d.jpg',
    description: 'Логист экзотических грузов',
    icon: 'Truck'
  },
  {
    name: 'Генерал Гавс',
    image: 'https://cdn.poehali.dev/projects/24141875-55cd-4df0-861b-dd6c6c0be2fc/files/2dd1bbe8-eb33-46dc-bd83-b8f3dac4e44d.jpg',
    description: 'Верховный командующий',
    icon: 'Crown'
  }
];

const Index = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedClass, setSelectedClass] = useState<typeof classes[0] | null>(null);

  const handleContract = () => {
    setIsSpinning(true);
    setSelectedClass(null);

    setTimeout(() => {
      const randomClass = classes[Math.floor(Math.random() * classes.length)];
      setSelectedClass(randomClass);
      setIsSpinning(false);
    }, 3000);
  };

  const spinningClasses = [...classes, ...classes, ...classes, ...classes, ...classes];

  return (
    <div className="min-h-screen bg-background text-foreground font-roboto">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Icon name="Shield" size={48} className="text-secondary" />
            <h1 className="text-6xl font-oswald font-bold text-secondary">
              ЧВК ДА ДА НЕТ НЕТ
            </h1>
            <Icon name="Swords" size={48} className="text-secondary" />
          </div>
          <p className="text-2xl text-muted-foreground">
            Самая ответственная работа в Африке с 2023 года
          </p>
        </header>

        <section className="text-center mb-16">
          <h2 className="text-4xl font-oswald font-bold mb-8 text-accent">
            🎯 Набор от 15 лет
          </h2>
          <Button
            onClick={handleContract}
            disabled={isSpinning}
            size="lg"
            className="text-2xl px-12 py-8 font-oswald font-bold bg-secondary hover:bg-secondary/90 text-foreground"
          >
            {isSpinning ? '⏳ Проверяем документы...' : '📝 ПОДПИСАТЬ КОНТРАКТ'}
          </Button>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-oswald font-bold text-center mb-8 text-accent">
            💼 Доступные классы
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {classes.map((cls) => (
              <Card 
                key={cls.name} 
                className="p-6 bg-card border-2 border-primary hover:border-accent hover:scale-105 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <Icon name={cls.icon as any} size={48} className="text-accent" />
                  </div>
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-40 object-cover rounded-lg border-2 border-accent mb-4"
                  />
                  <h3 className="text-xl font-oswald font-bold mb-2 text-foreground">
                    {cls.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cls.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {(isSpinning || selectedClass) && (
          <section className="mb-16">
            <Card className="p-8 bg-card border-2 border-accent overflow-hidden">
              <h3 className="text-3xl font-oswald font-bold text-center mb-6 text-accent">
                🎰 Распределение по специальностям
              </h3>
              
              <div className="relative h-[400px] overflow-hidden rounded-lg border-4 border-primary">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent pointer-events-none z-10" />
                
                <div 
                  className={`flex flex-col gap-4 py-4 ${isSpinning ? 'animate-spin-slow' : ''}`}
                  style={!isSpinning && selectedClass ? {
                    transform: `translateY(-${spinningClasses.findIndex(c => c.name === selectedClass.name) * 120}px)`
                  } : {}}
                >
                  {spinningClasses.map((cls, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-6 bg-muted p-4 rounded-lg mx-4 min-h-[100px]"
                    >
                      <img
                        src={cls.image}
                        alt={cls.name}
                        className="w-24 h-24 object-cover rounded-lg border-2 border-accent"
                      />
                      <div className="text-left">
                        <h4 className="text-2xl font-oswald font-bold text-foreground">
                          {cls.name}
                        </h4>
                        <p className="text-muted-foreground">{cls.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute top-1/2 left-0 right-0 h-1 bg-accent transform -translate-y-1/2 z-20" />
              </div>

              {selectedClass && !isSpinning && (
                <div className="mt-6 text-center animate-fade-in">
                  <p className="text-3xl font-oswald font-bold text-accent">
                    🎉 Поздравляем! Вы теперь: {selectedClass.name}
                  </p>
                </div>
              )}
            </Card>
          </section>
        )}

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-card border-2 border-primary hover:border-accent transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <Icon name="Package" size={32} className="text-accent" />
              <h3 className="text-2xl font-oswald font-bold">Что мы предлагаем</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <img
                src="https://cdn.poehali.dev/projects/24141875-55cd-4df0-861b-dd6c6c0be2fc/files/50ae53fd-43f9-46cf-bf5d-ad3bb69c44ca.jpg"
                alt="Снаряжение"
                className="w-full h-32 object-cover rounded-lg border-2 border-accent"
              />
              <img
                src="https://cdn.poehali.dev/projects/24141875-55cd-4df0-861b-dd6c6c0be2fc/files/497a2ea6-758b-4c39-8313-701c0f13ccbb.jpg"
                alt="Техника"
                className="w-full h-32 object-cover rounded-lg border-2 border-accent"
              />
              <img
                src="https://cdn.poehali.dev/projects/24141875-55cd-4df0-861b-dd6c6c0be2fc/files/532cf4b4-5214-44b5-9815-3221b13adc6b.jpg"
                alt="Командиры"
                className="w-full h-32 object-cover rounded-lg border-2 border-accent"
              />
              <img
                src="https://cdn.poehali.dev/projects/24141875-55cd-4df0-861b-dd6c6c0be2fc/files/e4d71169-92a9-4415-afa5-c37e29fde7e9.jpg"
                alt="Охрана бананов"
                className="w-full h-32 object-cover rounded-lg border-2 border-accent"
              />
            </div>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Полный комплект снаряжения</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Новейшая техника</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Крутые командиры</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Достойная работа: охрана перевозки бананов в Африке</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-card border-2 border-primary hover:border-accent transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <Icon name="Coins" size={32} className="text-accent" />
              <h3 className="text-2xl font-oswald font-bold">Выплаты</h3>
            </div>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-2xl">🍬</span>
                <span>Зарплата конфетами</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">🍫</span>
                <span>Премии Choco Pie</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">🍫</span>
                <span>За выслугу лет — большой Snickers</span>
              </li>
            </ul>
          </Card>
        </section>

        <section className="text-center mb-16">
          <Card className="p-12 bg-card border-2 border-accent">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-6xl font-oswald font-bold text-accent mb-2">2</p>
                <p className="text-2xl text-muted-foreground">года на рынке</p>
              </div>
              <div>
                <p className="text-6xl font-oswald font-bold text-accent mb-2">25 000</p>
                <p className="text-2xl text-muted-foreground">довольных клиентов</p>
              </div>
            </div>
          </Card>
        </section>

        <footer className="text-center">
          <Card className="p-8 bg-card border-2 border-primary">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Icon name="Phone" size={32} className="text-accent" />
              <h3 className="text-3xl font-oswald font-bold">Связь с нами</h3>
            </div>
            <div className="space-y-4">
              <div>
                <a 
                  href="tel:+78005553535"
                  className="text-4xl font-oswald font-bold text-accent hover:text-secondary transition-colors"
                >
                  +7 (800) 555-35-35
                </a>
                <p className="text-muted-foreground mt-2">Первый звонок бесплатно!</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-xl">
                <Icon name="Mail" size={24} className="text-accent" />
                <a 
                  href="mailto:PochtaDlyaSpama_123@mail.ru"
                  className="font-roboto text-accent hover:text-secondary transition-colors"
                >
                  PochtaDlyaSpama_123@mail.ru
                </a>
              </div>
            </div>
          </Card>
        </footer>
      </div>
    </div>
  );
};

export default Index;
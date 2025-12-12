import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const subjectData: Record<string, any> = {
  'Математика': {
    icon: 'Calculator',
    color: 'from-violet-500 to-purple-600',
    textbooks: {
      5: [{ id: 1, title: 'Математика 5 класс', author: 'Виленкин Н.Я.', exercises: 1547 }],
      6: [{ id: 2, title: 'Математика 6 класс', author: 'Виленкин Н.Я.', exercises: 1595 }],
      7: [{ id: 3, title: 'Алгебра 7 класс', author: 'Макарычев Ю.Н.', exercises: 1134 }, { id: 4, title: 'Геометрия 7-9 класс', author: 'Атанасян Л.С.', exercises: 1310 }],
      8: [{ id: 5, title: 'Алгебра 8 класс', author: 'Макарычев Ю.Н.', exercises: 1214 }, { id: 6, title: 'Геометрия 7-9 класс', author: 'Атанасян Л.С.', exercises: 1310 }],
      9: [{ id: 7, title: 'Алгебра 9 класс', author: 'Макарычев Ю.Н.', exercises: 1071 }, { id: 8, title: 'Геометрия 7-9 класс', author: 'Атанасян Л.С.', exercises: 1310 }],
      10: [{ id: 9, title: 'Алгебра 10-11 класс', author: 'Алимов Ш.А.', exercises: 1568 }, { id: 10, title: 'Геометрия 10-11 класс', author: 'Атанасян Л.С.', exercises: 1358 }],
      11: [{ id: 11, title: 'Алгебра 10-11 класс', author: 'Алимов Ш.А.', exercises: 1568 }, { id: 12, title: 'Геометрия 10-11 класс', author: 'Атанасян Л.С.', exercises: 1358 }],
    }
  },
  'Русский язык': {
    icon: 'BookOpen',
    color: 'from-pink-500 to-rose-600',
    textbooks: {
      5: [{ id: 13, title: 'Русский язык 5 класс', author: 'Ладыженская Т.А.', exercises: 732 }],
      6: [{ id: 14, title: 'Русский язык 6 класс', author: 'Ладыженская Т.А.', exercises: 621 }],
      7: [{ id: 15, title: 'Русский язык 7 класс', author: 'Ладыженская Т.А.', exercises: 516 }],
      8: [{ id: 16, title: 'Русский язык 8 класс', author: 'Ладыженская Т.А.', exercises: 447 }],
      9: [{ id: 17, title: 'Русский язык 9 класс', author: 'Ладыженская Т.А.', exercises: 312 }],
      10: [{ id: 18, title: 'Русский язык 10-11 класс', author: 'Гольцова Н.Г.', exercises: 545 }],
      11: [{ id: 19, title: 'Русский язык 10-11 класс', author: 'Гольцова Н.Г.', exercises: 545 }],
    }
  },
  'Английский': {
    icon: 'Languages',
    color: 'from-blue-500 to-cyan-600',
    textbooks: {
      5: [{ id: 20, title: 'Spotlight 5 класс', author: 'Ваулина Ю.Е.', exercises: 890 }],
      6: [{ id: 21, title: 'Spotlight 6 класс', author: 'Ваулина Ю.Е.', exercises: 923 }],
      7: [{ id: 22, title: 'Spotlight 7 класс', author: 'Ваулина Ю.Е.', exercises: 1041 }],
      8: [{ id: 23, title: 'Spotlight 8 класс', author: 'Ваулина Ю.Е.', exercises: 876 }],
      9: [{ id: 24, title: 'Spotlight 9 класс', author: 'Ваулина Ю.Е.', exercises: 956 }],
      10: [{ id: 25, title: 'Spotlight 10 класс', author: 'Афанасьева О.В.', exercises: 784 }],
      11: [{ id: 26, title: 'Spotlight 11 класс', author: 'Афанасьева О.В.', exercises: 812 }],
    }
  },
  'Физика': {
    icon: 'Atom',
    color: 'from-orange-500 to-amber-600',
    textbooks: {
      7: [{ id: 27, title: 'Физика 7 класс', author: 'Перышкин А.В.', exercises: 684 }],
      8: [{ id: 28, title: 'Физика 8 класс', author: 'Перышкин А.В.', exercises: 712 }],
      9: [{ id: 29, title: 'Физика 9 класс', author: 'Перышкин А.В.', exercises: 741 }],
      10: [{ id: 30, title: 'Физика 10 класс', author: 'Мякишев Г.Я.', exercises: 856 }],
      11: [{ id: 31, title: 'Физика 11 класс', author: 'Мякишев Г.Я.', exercises: 893 }],
    }
  },
  'Химия': {
    icon: 'FlaskConical',
    color: 'from-green-500 to-emerald-600',
    textbooks: {
      8: [{ id: 32, title: 'Химия 8 класс', author: 'Габриелян О.С.', exercises: 456 }],
      9: [{ id: 33, title: 'Химия 9 класс', author: 'Габриелян О.С.', exercises: 512 }],
      10: [{ id: 34, title: 'Химия 10 класс', author: 'Габриелян О.С.', exercises: 389 }],
      11: [{ id: 35, title: 'Химия 11 класс', author: 'Габриелян О.С.', exercises: 421 }],
    }
  },
  'История': {
    icon: 'Scroll',
    color: 'from-indigo-500 to-blue-600',
    textbooks: {
      5: [{ id: 36, title: 'История Древнего мира 5 класс', author: 'Вигасин А.А.', exercises: 325 }],
      6: [{ id: 37, title: 'История Средних веков 6 класс', author: 'Агибалова Е.В.', exercises: 298 }],
      7: [{ id: 38, title: 'История России 7 класс', author: 'Арсентьев Н.М.', exercises: 412 }],
      8: [{ id: 39, title: 'История России 8 класс', author: 'Арсентьев Н.М.', exercises: 445 }],
      9: [{ id: 40, title: 'История России 9 класс', author: 'Арсентьев Н.М.', exercises: 387 }],
      10: [{ id: 41, title: 'История 10 класс', author: 'Горинов М.М.', exercises: 534 }],
      11: [{ id: 42, title: 'История 11 класс', author: 'Горинов М.М.', exercises: 498 }],
    }
  },
};

export default function Subject() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const subjectName = searchParams.get('name') || 'Математика';
  const [selectedClass, setSelectedClass] = useState<number>(9);

  const subject = subjectData[subjectName] || subjectData['Математика'];
  const availableClasses = Object.keys(subject.textbooks).map(Number).sort((a, b) => a - b);
  const textbooks = subject.textbooks[selectedClass] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-pink-50">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-violet-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center shadow-lg">
                <Icon name="BookOpen" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                ГДЗ.рф
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" className="text-gray-700 hover:text-violet-600 font-medium" onClick={() => navigate('/')}>
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-violet-600 font-medium">
                <Icon name="BookMarked" size={18} className="mr-2" />
                Решебники
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-violet-600 font-medium">
                <Icon name="Library" size={18} className="mr-2" />
                Учебники
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-violet-600 font-medium" onClick={() => navigate('/profile')}>
                <Icon name="User" size={18} className="mr-2" />
                Профиль
              </Button>
            </nav>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <Button variant="ghost" onClick={() => navigate('/')} className="mb-4 text-gray-600 hover:text-violet-600">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад к главной
          </Button>

          <div className={`rounded-3xl bg-gradient-to-br ${subject.color} p-8 md:p-12 shadow-2xl`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Icon name={subject.icon as any} size={40} className="text-white" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{subjectName}</h2>
                <p className="text-white/90 text-lg">Выберите класс и найдите нужный учебник</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 animate-slide-up">
          <h3 className="text-2xl font-bold mb-6 text-center">Выберите класс</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {availableClasses.map((cls) => (
              <Button
                key={cls}
                variant={selectedClass === cls ? "default" : "outline"}
                size="lg"
                className={`text-lg px-8 py-6 rounded-2xl transition-all ${
                  selectedClass === cls
                    ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg scale-110'
                    : 'hover:scale-105 hover:border-violet-400'
                }`}
                onClick={() => setSelectedClass(cls)}
              >
                {cls} класс
              </Button>
            ))}
          </div>
        </div>

        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Icon name="BookMarked" size={28} className="text-violet-600" />
            Учебники {selectedClass} класса
          </h3>

          {textbooks.length === 0 ? (
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12 text-center">
                <Icon name="BookX" size={64} className="mx-auto text-gray-300 mb-4" />
                <h4 className="text-xl font-bold mb-2">Учебники не найдены</h4>
                <p className="text-gray-500">Для выбранного класса пока нет учебников</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {textbooks.map((book: any, index: number) => (
                <Card
                  key={book.id}
                  className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer border-0 shadow-lg animate-scale-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => navigate(`/textbook?id=${book.id}&title=${encodeURIComponent(book.title)}`)}
                >
                  <div className={`h-3 bg-gradient-to-r ${subject.color}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon name="BookOpen" size={32} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl mb-2 group-hover:text-violet-600 transition-colors">
                          {book.title}
                        </h4>
                        <p className="text-gray-600 mb-4">{book.author}</p>
                        <div className="flex items-center justify-between">
                          <Badge className={`bg-gradient-to-r ${subject.color} text-white border-0`}>
                            <Icon name="FileText" size={14} className="mr-1" />
                            {book.exercises} упражнений
                          </Badge>
                          <Icon name="ChevronRight" size={24} className="text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-violet-100 to-pink-100">
            <CardContent className="p-8">
              <Icon name="Lightbulb" size={48} className="mx-auto text-violet-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">Не нашли нужный учебник?</h4>
              <p className="text-gray-700 mb-4">
                Мы постоянно добавляем новые учебники и ГДЗ. Оставьте заявку, и мы добавим нужный вам учебник в приоритете!
              </p>
              <Button className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white">
                <Icon name="Plus" size={18} className="mr-2" />
                Запросить учебник
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

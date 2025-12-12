import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const mockSubjects = [
  { id: 1, name: 'Математика', icon: 'Calculator', color: 'bg-gradient-to-br from-violet-500 to-purple-600', count: 342 },
  { id: 2, name: 'Русский язык', icon: 'BookOpen', color: 'bg-gradient-to-br from-pink-500 to-rose-600', count: 289 },
  { id: 3, name: 'Английский', icon: 'Languages', color: 'bg-gradient-to-br from-blue-500 to-cyan-600', count: 267 },
  { id: 4, name: 'Физика', icon: 'Atom', color: 'bg-gradient-to-br from-orange-500 to-amber-600', count: 198 },
  { id: 5, name: 'Химия', icon: 'FlaskConical', color: 'bg-gradient-to-br from-green-500 to-emerald-600', count: 156 },
  { id: 6, name: 'История', icon: 'Scroll', color: 'bg-gradient-to-br from-indigo-500 to-blue-600', count: 134 },
];

const mockTextbooks = [
  { id: 1, title: 'Алгебра 9 класс', author: 'Макарычев Ю.Н.', class: 9, subject: 'Математика', rating: 4.8, views: 12450, image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=400&fit=crop' },
  { id: 2, title: 'Русский язык 8 класс', author: 'Ладыженская Т.А.', class: 8, subject: 'Русский язык', rating: 4.7, views: 10230, image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=400&fit=crop' },
  { id: 3, title: 'Геометрия 10-11 класс', author: 'Атанасян Л.С.', class: 11, subject: 'Математика', rating: 4.9, views: 15670, image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&h=400&fit=crop' },
  { id: 4, title: 'Английский язык 7 класс', author: 'Spotlight', class: 7, subject: 'Английский', rating: 4.6, views: 9890, image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=300&h=400&fit=crop' },
  { id: 5, title: 'Физика 9 класс', author: 'Перышкин А.В.', class: 9, subject: 'Физика', rating: 4.7, views: 11200, image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=300&h=400&fit=crop' },
  { id: 6, title: 'Химия 8 класс', author: 'Габриелян О.С.', class: 8, subject: 'Химия', rating: 4.5, views: 8740, image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=300&h=400&fit=crop' },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const classes = Array.from({ length: 11 }, (_, i) => i + 1);

  const filteredTextbooks = mockTextbooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = !selectedClass || book.class === selectedClass;
    const matchesSubject = !selectedSubject || book.subject === selectedSubject;
    return matchesSearch && matchesClass && matchesSubject;
  });

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
              <Button variant="ghost" className="text-gray-700 hover:text-violet-600 font-medium">
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
              <Button variant="ghost" className="text-gray-700 hover:text-violet-600 font-medium">
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
        <section className="mb-12 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Найди готовое домашнее задание
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Более 1000 решебников и учебников для всех классов
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Введите название учебника, автора или предмет..."
                className="pl-12 pr-4 py-6 text-lg border-2 border-violet-200 focus:border-violet-500 rounded-2xl shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <Badge
              variant={selectedClass === null ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105"
              onClick={() => setSelectedClass(null)}
            >
              Все классы
            </Badge>
            {classes.map((cls) => (
              <Badge
                key={cls}
                variant={selectedClass === cls ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105"
                onClick={() => setSelectedClass(cls)}
              >
                {cls} класс
              </Badge>
            ))}
          </div>
        </section>

        <section className="mb-12 animate-slide-up">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Icon name="Grid3x3" size={28} className="text-violet-600" />
            Популярные предметы
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mockSubjects.map((subject, index) => (
              <Card
                key={subject.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in border-0 ${subject.color}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedSubject(selectedSubject === subject.name ? null : subject.name)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Icon name={subject.icon as any} size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-1">{subject.name}</h4>
                  <p className="text-white/80 text-sm">{subject.count} ГДЗ</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Icon name="TrendingUp" size={28} className="text-pink-600" />
              {selectedClass || selectedSubject ? 'Результаты поиска' : 'Популярные учебники'}
            </h3>
            {(selectedClass || selectedSubject) && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedClass(null);
                  setSelectedSubject(null);
                }}
                className="gap-2"
              >
                <Icon name="X" size={16} />
                Сбросить фильтры
              </Button>
            )}
          </div>

          {filteredTextbooks.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="SearchX" size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">Учебники не найдены. Попробуйте изменить фильтры.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTextbooks.map((book, index) => (
                <Card
                  key={book.id}
                  className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer border-0 shadow-lg animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-violet-100 to-pink-100">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-white/90 backdrop-blur-sm text-violet-700 border-0 shadow-lg">
                        {book.class} класс
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h4 className="font-bold text-lg mb-2 line-clamp-2">{book.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{book.author}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-500">
                        <Icon name="Star" size={16} className="fill-current" />
                        <span className="font-semibold">{book.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Icon name="Eye" size={16} />
                        <span>{book.views.toLocaleString()}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white shadow-lg">
                      <Icon name="BookOpen" size={18} className="mr-2" />
                      Открыть решебник
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="mt-20 bg-gradient-to-br from-violet-900 to-pink-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Icon name="BookOpen" size={20} />
                </div>
                <h3 className="font-bold text-xl">ГДЗ.рф</h3>
              </div>
              <p className="text-white/80 text-sm">
                Твой помощник в учёбе. Более 1000 решебников и учебников онлайн.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Главная</li>
                <li className="hover:text-white cursor-pointer transition-colors">Решебники</li>
                <li className="hover:text-white cursor-pointer transition-colors">Учебники</li>
                <li className="hover:text-white cursor-pointer transition-colors">Предметы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Классы</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">1-4 классы</li>
                <li className="hover:text-white cursor-pointer transition-colors">5-9 классы</li>
                <li className="hover:text-white cursor-pointer transition-colors">10-11 классы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">О проекте</li>
                <li className="hover:text-white cursor-pointer transition-colors">Помощь</li>
                <li className="hover:text-white cursor-pointer transition-colors">Связаться с нами</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>© 2024 ГДЗ.рф — Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

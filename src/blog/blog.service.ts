import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBlogDto: CreateBlogDto) {
    console.log('createBlogDto', createBlogDto);

    return this.prisma.blog.create({
      data: createBlogDto,
    });
    // return 'This action adds a new blog';
  }

  findAll() {
    return this.prisma.blog.findMany();
    // return `This action returns all blog`;
  }

  findOne(id: number) {
    return this.prisma.blog.findUnique({
      where: { id: id },
    });
    // return `This action returns a #${id} blog`;
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    const updateBlog = this.prisma.blog.update({
      where: { id },
      data: updateBlogDto,
    });
    return updateBlog;
    // return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return this.prisma.blog.delete({ where: { id } });
    // return `This action removes a #${id} blog`;
  }
}

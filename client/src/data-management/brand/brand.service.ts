import axios, { AxiosResponse } from 'axios';

interface Brand {
  id: string;
  name: string;
}

interface BrandInput {
  name: string;
}

class BrandService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'http://localhost:3000/graphql';
  }

  private async sendRequest(queryOrMutation: string): Promise<AxiosResponse> {
    try {
      return await axios.post(
        this.apiUrl,
        { query: queryOrMutation },
        { headers: { 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getAllBrands(): Promise<Brand[]> {
    const query = `
      query {
        brands {
          id
          name
        }
      }
    `;

    try {
      const response = await this.sendRequest(query);
      return response.data.data.brands;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getBrandById(brandId: string): Promise<Brand> {
    const query = `
      query {
        brand(id: "${brandId}") {
          id
          name
        }
      }
    `;

    try {
      const response = await this.sendRequest(query);
      return response.data.data.brand;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createBrand(name: string): Promise<Brand> {
    const mutation = `
      mutation {
        createBrand(input: { name: "${name}" }) {
          id
          name
        }
      }
    `;

    try {
      const response = await this.sendRequest(mutation);
      return response.data.data.createBrand;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateBrand(brandId: string, newName: string): Promise<Brand> {
    const mutation = `
      mutation {
        updateBrand(id: "${brandId}", input: { name: "${newName}" }) {
          id
          name
        }
      }
    `;

    try {
      const response = await this.sendRequest(mutation);
      return response.data.data.updateBrand;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteBrand(brandId: string): Promise<Brand> {
    const mutation = `
      mutation {
        deleteBrand(id: "${brandId}") {
          id
          name
        }
      }
    `;

    try {
      const response = await this.sendRequest(mutation);
      return response.data.data.deleteBrand;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default BrandService;
